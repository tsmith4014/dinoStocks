# Cloud Infrastructure Overview

## Application Architecture on AWS EKS

This README provides an overview of the cloud infrastructure hosting our Django/React/PostgreSQL application on AWS EKS. The below diagram illustrates the network architecture, showcasing how the different AWS components and Kubernetes resources are orchestrated to deliver our application.

<p align="center">
  <img src="/static/aws_eks.png" alt="AWS EKS Architecture" width="850"/>
</p>
### Components:

- **AWS Cloud**: Root layer that encapsulates all infrastructure components within the `us-east-1` region.

- **VPC**: Virtual Private Cloud where our network resides, partitioned from the rest of the AWS cloud.

- **Subnet**: Segments of our VPC where resources are launched. Each subnet resides in a different Availability Zone (AZ) for high availability.

- **Load Balancers**: 
  - An Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones.
  - A Network Load Balancer (NLB) handles traffic for our backend services.

- **EKS Cluster**: Manages Kubernetes resources, such as deployments and services.

  - **Node Instance**: EC2 instances that form the Kubernetes nodes.
  - **Pods**: Group of one or more containers deployed on the nodes.
    - `dinostocks-frontend`: Container running our React frontend.
    - `dinostocks-backend`: Container running our Django backend.
    - `postgres`: Container running our PostgreSQL database.

- **etcd**: A consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.

- **Controllers/Scheduler**: Kubernetes components that ensure desired state for pods and services.

- **API Server**: Kubernetes component that exposes the Kubernetes API.

- **Docker Hub**: Centralized repository for managing Docker images.

### Workflow:

1. **Development and Provisioning**:
   - Developers build the Docker images for the application components.
   - The built images are pushed to Docker Hub.
   
2. **Deployment**:
   - Kubernetes pulls the necessary images from Docker Hub and runs them as pods in the EKS cluster.

3. **User Interaction**:
   - Users interact with the application via the ALB, which routes their requests to

the appropriate services within the cluster.

## Deployment and Debugging Strategy

Our deployment journey starts with building Docker images for each component of our application: the Django/React frontend and the PostgreSQL backend. After thorough testing and debugging in a local environment and via Minikube, we push our Docker images to Docker Hub.

Once the images are in the repository, they're ready to be deployed on AWS Elastic Kubernetes Service (EKS). Our Kubernetes configurations define the necessary services, deployments, and load balancers. This ensures that our application can manage traffic efficiently and maintain high availability through AWS's robust infrastructure.

## Kubernetes and AWS Services Configuration

Our EKS setup involves configuring Kubernetes services to manage and route traffic. These configurations use AWS-specific components such as Elastic Load Balancers (ELB) that listen on specific ports and forward traffic to the corresponding pods running within our cluster.

The backend service, for instance, is exposed via a load balancer that listens on port 8000, while the frontend service listens on port 5173. These services are critical for the communication between the user's browser and our application, allowing for a seamless and responsive user experience.

### EKS Management

EKS simplifies the process of running Kubernetes on AWS without requiring the installation and operation of the Kubernetes control plane or worker nodes. This managed service provides a highly available and secure environment for our application to run, while also integrating with AWS services for logging, monitoring, and security.

---

## Conclusion

This README and the accompanying diagram provide a high-level overview of the infrastructure powering our Django/React/PostgreSQL application on AWS. By leveraging Docker, Kubernetes, and AWS services, we've built a scalable, resilient, and easy-to-maintain cloud infrastructure.

For a detailed guide on the setup, deployment processes, and best practices, please refer to the supplementary documentation provided in our repository.

---

