resource "aws_eks_cluster" "dinostocks-eks" {
 name = "dinostocks-cluster"
 role_arn = aws_iam_role.dinostocks-iam-role.arn

 vpc_config {
  subnet_ids = [var.subnet_id_1, var.subnet_id_2]
 }

 depends_on = [
  aws_iam_role.dinostocks-iam-role,
 ]
}

 resource "aws_eks_node_group" "worker-node-group" {
  cluster_name  = aws_eks_cluster.dinostocks-eks.name
  node_group_name = "dinostocks-workernodes"
  node_role_arn  = aws_iam_role.workernodes.arn
  subnet_ids   = [var.subnet_id_1, var.subnet_id_2]
  instance_types = ["t2.small"]
 
  scaling_config {
   desired_size = 1
   max_size   = 1
   min_size   = 1
  }
 
  depends_on = [
   aws_iam_role_policy_attachment.AmazonEKSWorkerNodePolicy,
   aws_iam_role_policy_attachment.AmazonEKS_CNI_Policy,
   aws_iam_role_policy_attachment.AmazonEC2ContainerRegistryReadOnly,
  ]
 }

variable "app_region" {
  type    = string
  default = "us-east-1"
}

variable "subnet_id_1" {
  type    = string
  default = "subnet-0527dafc531b072e2"
}

variable "subnet_id_2" {
  type    = string
  default = "subnet-02dc66a75e07be36a"
}
