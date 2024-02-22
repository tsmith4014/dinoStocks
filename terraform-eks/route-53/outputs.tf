# Output the Route 53 hosted zone ID
output "route53_zone_id" {
  value = aws_route53_zone.dinostocks_zone.zone_id
}