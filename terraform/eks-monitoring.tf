# CloudWatch Dashboard for "dinostocks-cluster" EKS Monitoring
resource "aws_cloudwatch_dashboard" "eks_monitoring_dashboard" {
  dashboard_name = "dinoStocks_EKS_Monitoring_Dashboard"
  
  dashboard_body = jsonencode({
    widgets: [
      {
        type: "metric",
        x: 0,
        y: 0,
        width: 6,
        height: 6,
        properties: {
          title: "List Node Groups",
          metrics: [
            {
              namespace: "AWS/EKS",
              metric_name: "ListNodegroups",
              period: 300,
              stat: "Sum",
              dimensions: {
                ClusterName: "dinostocks-cluster"
              }
            }
          ],
          view: "singleValue",
          region: "us-east-1"
        }
      },
      {
        type: "metric",
        x: 6,
        y: 0,
        width: 6,
        height: 6,
        properties: {
          title: "List Clusters",
          metrics: [
            {
              namespace: "AWS/EKS",
              metric_name: "ListClusters",
              period: 300,
              stat: "Sum",
              dimensions: {
                ClusterName: "dinostocks-cluster"
              }
            }
          ],
          view: "singleValue",
          region: "us-east-1"
        }
      },
      {
        type: "metric",
        x: 0,
        y: 6,
        width: 6,
        height: 6,
        properties: {
          title: "Incoming Log Events",
          metrics: [
            {
              namespace: "AWS/Logs",
              metric_name: "IncomingLogEvents",
              period: 300,
              stat: "Sum"
            }
          ],
          view: "singleValue",
          region: "us-east-1"
        }
      },
      {
        type: "metric",
        x: 6,
        y: 6,
        width: 6,
        height: 6,
        properties: {
          title: "Incoming Bytes",
          metrics: [
            {
              namespace: "AWS/Logs",
              metric_name: "IncomingBytes",
              period: 300,
              stat: "Sum"
            }
          ],
          view: "singleValue",
          region: "us-east-1"
        }
      }
    ]
  })
}
