# Create a Route 53 hosted zone
resource "aws_route53_zone" "dinostocks_zone" {
  name = var.hosted_zone
}

resource "aws_route53_record" "eks_cname_record" {
  zone_id = aws_route53_zone.dinostocks_zone.zone_id
  name    = "example.com"
  type    = "CNAME"
  ttl     = 300  # Time to live in seconds

  records = [
    "abc123456789.us-west-2.eks.amazonaws.com"  # Replace this with your EKS cluster's endpoint
  ]
}