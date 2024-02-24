# Define your RDS instance
resource "aws_db_instance" "dinostocks_postgres" {
  identifier           = var.db_instance_identifier
  engine               = var.db_engine
  engine_version       = var.db_engine_version
  instance_class       = var.db_instance_class
  allocated_storage    = var.db_allocated_storage
  username             = var.db_username
  password             = var.db_password
  publicly_accessible  = var.publicly_accessible
  db_subnet_group_name = var.db_subnet_group_name

  tags = {
    Name = var.db_name  # Specify the name of the database as a tag
  }
}

# Security Group for RDS
resource "aws_security_group" "rds_sg" {
  name        = "rds_sg"
  description = "Allow inbound access to RDS instance"
  
  # Define ingress rules
  ingress {
    from_port   = var.db_port
    to_port     = var.db_port
    protocol    = "tcp"
    security_groups = [aws_security_group.eks_nodes.id]  # Allows traffic from EKS nodes
  }

  # Define egress rules
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    security_groups = [aws_security_group.eks_nodes.id]  # Allows traffic to EKS nodes
  }
}

