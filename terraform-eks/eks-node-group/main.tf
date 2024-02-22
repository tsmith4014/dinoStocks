# Define the launch configuration for EKS worker nodes
resource "aws_launch_configuration" "eks_node_launch_config" {
  name_prefix          = "eks-node"
  image_id             = data.aws_ami.eks.id
  instance_type        = "t3.micro"
  security_groups      = [aws_security_group.eks_nodes.id]
  iam_instance_profile = aws_iam_instance_profile.eks_node_profile.id
  key_name             = var.key_name
  user_data            = <<-EOF
                          #!/bin/bash
                          /etc/eks/bootstrap.sh ${var.cluster_name}
                          EOF

  lifecycle {
    create_before_destroy = true
  }
}