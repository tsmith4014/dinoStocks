variable "cluster_name" {
  type    = string
  default = "dev-eks-dinostocks"
}

variable "vpc_id" {
  description = "The ID of your VPC"
  default     = "vpc-0371eada217b98081"
}

variable "subnet_ids" {
  description = "A list of subnet IDs within your VPC"
  default     = [
    "subnet-019774abdcb532371",
    "subnet-0d961fdc76b396115",
    "subnet-0cd0629680997b7ef",
    "subnet-0086c75fc055f70d5",
    "subnet-038f2d74fcdfa5849",
    "subnet-0990fced371f7d5e8"
  ]
}

