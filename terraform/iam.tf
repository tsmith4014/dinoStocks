# Define the IAM role for the EKS cluster
resource "aws_iam_role" "dinostocks-iam-role" {
  name = "dinostocks-eks-iam-role"
  path = "/"
  
  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "eks.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  })
}

# Attach policies to the dinostocks-iam-role
resource "aws_iam_role_policy_attachment" "AmazonEKSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.dinostocks-iam-role.name
}

resource "aws_iam_role_policy_attachment" "AmazonEC2ContainerRegistryReadOnly-EKS" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.dinostocks-iam-role.name
}

resource "aws_iam_role_policy_attachment" "CloudWatchCustom" {
  policy_arn = aws_iam_policy.DinostocksCloudWatchPolicy.arn
  role       = aws_iam_role.dinostocks-iam-role.name
}

# Define the IAM role for the worker nodes
resource "aws_iam_role" "workernodes" {
  name = "eks-node-group-example"
 
  assume_role_policy = jsonencode({
    "Statement": [{
      "Action": "sts:AssumeRole",
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      }
    }],
    "Version": "2012-10-17"
  })
}

# Attach policies to the worker nodes role
resource "aws_iam_role_policy_attachment" "AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.workernodes.name
}

resource "aws_iam_role_policy_attachment" "AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.workernodes.name
}

resource "aws_iam_role_policy_attachment" "EC2InstanceProfileForImageBuilderECRContainerBuilds" {
  policy_arn = "arn:aws:iam::aws:policy/EC2InstanceProfileForImageBuilderECRContainerBuilds"
  role       = aws_iam_role.workernodes.name
}

resource "aws_iam_role_policy_attachment" "AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.workernodes.name
}

# Define the custom IAM policy for CloudWatch access
resource "aws_iam_policy" "DinostocksCloudWatchPolicy" {
  name        = "DinostocksCloudWatchPolicy"
  description = "Policy to allow EKS monitoring"

  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:GetMetricData",
                "cloudwatch:GetMetricStatistics",
                "eks:ListNodeGroups",
                "eks:ListClusters"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "cloudwatch:Region": "us-east-1"
                }
            }
        }
    ]
}
POLICY
}

# Attach the custom IAM policy to the worker nodes role
resource "aws_iam_role_policy_attachment" "CloudWatchDashboard" {
  policy_arn = aws_iam_policy.DinostocksCloudWatchPolicy.arn
  role       = aws_iam_role.workernodes.name
}
