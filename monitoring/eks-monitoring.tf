
resource "aws_cloudwatch_dashboard" "eks_monitoring_dashboard" {
  dashboard_name = "dinoStocks_EKS_Monitoring_Dashboard"
  
  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 6
        height = 3

        properties = {
          metrics = [
            [
              "AWS/Usage",       # Namespace
              "CallCount",       # Metric name
              "Type",            # Dimension name
              "API",             # Dimension value
              "Resource",        # Dimension name
              "ListClusters",    # Dimension value
              "Service",         # Dimension name
              "EKS",             # Dimension value
              "Class",           # Dimension name
              "None",            # Dimension value
            ]
          ]
          period = 60
          stat   = "Average"
          region = "us-east-1"
          title  = "Number of EKS Clusters"
          view   = "singleValue"
        }
      },
      {
        type   = "metric"
        x      = 6
        y      = 0
        width  = 6
        height = 3

        properties = {
          metrics = [
            [
              "AWS/Usage",       # Namespace
              "CallCount",       # Metric name
              "Type",            # Dimension name
              "API",             # Dimension value
              "Resource",        # Dimension name
              "ListNodegroups",    # Dimension value
              "Service",         # Dimension name
              "EKS",             # Dimension value
              "Class",           # Dimension name
              "None",            # Dimension value
            ]
          ]
          period = 60
          stat   = "Average"
          region = "us-east-1"
          title  = "Number of EKS Clusters Node Groups"
          view   = "singleValue"
        }
      },
      {
        type   = "metric"
        x      = 0
        y      = 3
        width  = 6
        height = 3

        properties = {
          metrics = [
            [
              "AWS/Logs",       # Namespace
              "IncomingBytes",       # Metric name
              "LogGroupName",        # Dimension name
              "/aws/eks/dinostocks-cluster/cluster",   
            ]
          ]
          period = 60
          stat   = "Average"
          region = "us-east-1"
          title  = "EKS IncomingBytes"
          view   = "singleValue"
        }
      },
      {
        type   = "metric"
        x      = 6
        y      = 3
        width  = 6
        height = 3

        properties = {
          metrics = [
            [
              "AWS/Logs",       # Namespace
              "IncomingLogEvents",       # Metric name
              "LogGroupName",        # Dimension name
              "/aws/eks/dinostocks-cluster/cluster",   
            ]
          ]
          period = 60
          stat   = "Average"
          region = "us-east-1"
          title  = "EKS IncomingLogEvents"
          view   = "singleValue"
        }
      },
    ]
  })
}