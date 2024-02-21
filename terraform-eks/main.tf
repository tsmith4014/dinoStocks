#modules
module "eks_cluster" {
  source = "./eks-cluster"
}

module "eks_node_group" {
  source = "./eks-node-group"
}

module "eks_networking" {
  source = "./eks-networking"
}

#Route 53 module not included (reference: Step 12:DNS and route53)