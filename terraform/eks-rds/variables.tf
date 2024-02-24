variable "db_instance_identifier" {
  description = "The identifier for the RDS instance"
  type        = string
  default     = "dinostocks-db-instance"
}

variable "db_allocated_storage" {
  description = "The allocated storage capacity for the RDS instance (in GB)"
  type        = number
  default     = 20
}

variable "db_engine" {
  description = "The database engine type"
  default     = "postgres"
}

variable "db_engine_version" {
  description = "The version of the PostgreSQL engine for the RDS instance"
  type        = string
  default     = "16.1-R2"
}

variable "db_instance_class" {
  description = "The instance class for the RDS instance"
  type        = string
  default     = "db.t3.micro"
}

variable "db_name" {
  description = "The name of the database within the RDS instance"
  type        = string
  default     = "dinostocks_db"
}

variable "publicly_accessible" {
  description = "Whether the RDS instance should be publicly accessible"
  type        = bool
  default     = false
}

variable "db_port" {
  description = "The port number for the PostgreSQL database"
  type        = number
  default     = 5432
}

variable "eks_cluster_cidr" {
  type    = string
  default = "NEED UPDATE" #Make sure to update when you have more information on the eks cluster cidr
}

variable "db_subnet_group_name" {
  description = "The name of the RDS subnet group"
  default     = "NEED UPDATE" #Make sure to update when you have more information
}

#sensitive variables
#terraform plan -var-file=terraform.tfvars
variable "db_username" {
  description = "The username for accessing the database"
  type        = string
  sensitive   = true
}

variable "db_password" {
  description = "The password for accessing the database"
  type        = string
  sensitive   = true
}
