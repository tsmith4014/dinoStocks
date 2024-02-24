resource "aws_eks_cluster" "dinostocks-eks" {
  name = "dinostocks-cluster"
  role_arn = aws_iam_role.dinostocks-iam-role.arn

  vpc_config {
    subnet_ids = [var.subnet_id_1, var.subnet_id_2]
  }

  tags = {
    "Name" = "dinoStocks-Cluster"
  }
  
  depends_on = [
    aws_iam_role.dinostocks-iam-role,
  ]
}

resource "aws_eks_node_group" "worker-node-group" {
  cluster_name    = aws_eks_cluster.dinostocks-eks.name
  node_group_name = "dinostocks-workernodes"
  node_role_arn   = aws_iam_role.workernodes.arn
  subnet_ids      = [var.subnet_id_1, var.subnet_id_2]
  instance_types  = ["t2.small"]

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  tags = {
    "Name" = "dinoStocks-Node"
  }

  depends_on = [
    aws_iam_role_policy_attachment.AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.AmazonEC2ContainerRegistryReadOnly,
  ]
}

resource "aws_security_group" "eks_nodes" {
  name        = "eks_nodes_sg"
  description = "Security group for EKS nodes"

  # Define ingress rules
  ingress {
    from_port   = 0
    to_port     = 5173
    protocol    = "tcp"
  }

  # Define egress rules
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
  }
}
