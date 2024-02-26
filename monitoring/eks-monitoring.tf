/*
# CloudWatch Dashboard for "dinostocks-cluster" EKS Monitoring
resource "aws_cloudwatch_dashboard" "eks_monitoring_dashboard" {
  dashboard_name = "dinoStocks_EKS_Monitoring_Dashboard"
  
  dashboard_body = jsonencode({
    "widgets": [
      {
        "type": "metric",
        "x": 0,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "List Node Groups",
          "metrics": [
            [
              "AWS/EKS",
              "ListNodegroups",
              "Sum",
              "ClusterName",
              "dinostocks-cluster"
            ]
          ],
          "view": "singleValue",
          "region": "us-east-1"
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "List Clusters",
          "metrics": [
            [
              "AWS/EKS",
              "ListClusters",
              "Sum",
              "ClusterName",
              "dinostocks-cluster"
            ]
          ],
          "view": "singleValue",
          "region": "us-east-1"
        }
      },
      {
        "type": "metric",
        "x": 0,
        "y": 6,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Incoming Log Events",
          "metrics": [
            [
              "AWS/Logs",
              "IncomingLogEvents",
              "Sum"
            ]
          ],
          "view": "singleValue",
          "region": "us-east-1"
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 6,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Incoming Bytes",
          "metrics": [
            [
              "AWS/Logs",
              "IncomingBytes",
              "Sum"
            ]
          ],
          "view": "singleValue",
          "region": "us-east-1"
        }
      }
    ]
  })
}
*/