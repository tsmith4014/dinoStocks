/*
# Create a Route 53 hosted zone
resource "aws_route53_zone" "dinostocks_zone" {
  name = var.hosted_zone
}

resource "aws_route53_record" "eks_cname_record" {
  zone_id = aws_route53_zone.dinostocks_zone.zone_id
  name    = var.hosted_zone
  type    = "CNAME"
  ttl     = 300

  records = [
    aws_eks_cluster.dinostocks-eks.endpoint
  ]
}

# Output the Route 53 hosted zone ID
output "route53_zone_id" {
  value = aws_route53_zone.dinostocks_zone.zone_id
}
*/