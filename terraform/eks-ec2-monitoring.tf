resource "aws_cloudwatch_dashboard" "eks_ec2_nodes_monitoring" {
  dashboard_name = "dinostocks-ec2-nodes-Monitoring"

  dashboard_body = jsonencode({
    "widgets": [
      {
        "type": "metric",
        "x": 0,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "CPU Utilization",
          "metrics": [
            ["AWS/EC2", "CPUUtilization", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Status Check: Failed Instance",
          "metrics": [
            ["AWS/EC2", "StatusCheckFailed_Instance", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Network: In",
          "metrics": [
            ["AWS/EC2", "NetworkIn", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Network Packets: In",
          "metrics": [
            ["AWS/EC2", "NetworkPacketsIn", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Network Out",
          "metrics": [
            ["AWS/EC2", "NetworkOut", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Network: Packets Out",
          "metrics": [
            ["AWS/EC2", "NetworkPacketsOut", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Disk Read Ops",
          "metrics": [
            ["AWS/EC2", "DiskReadOps", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Disk Read: Bytes",
          "metrics": [
            ["AWS/EC2", "DiskReadBytes", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Disk Write Ops",
          "metrics": [
            ["AWS/EC2", "DiskWriteOps", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "metric",
        "x": 6,
        "y": 0,
        "width": 6,
        "height": 6,
        "properties": {
          "title": "Disk Write Bytes",
          "metrics": [
            ["AWS/EC2", "DiskWriteBytes", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node"],
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "dimensions": {
            "ClusterName": aws_eks_cluster.dinostocks-eks.name
          }
        }
      },
      {
        "type": "graph",
        "x": 0,
        "y": 6,
        "width": 12,
        "height": 6,
        "properties": {
          "title": "CPU Utilization vs CPU Credit Balance",
          "metrics": [
            ["AWS/EC2", "CPUUtilization", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node", {"label": "CPU Utilization"}],
            ["AWS/EC2", "CPUCreditBalance", "ClusterName", "${aws_eks_cluster.dinostocks-eks.name}", "Name", "dinoStocks-Node", {"label": "CPU Credit Balance"}]
          ],
          "period": 300,
          "stat": "Average",
          "region": "${var.app_region}",
          "yAxis": {
            "left": {
              "label": "Utilization"
            },
            "right": {
              "label": "Credit Balance"
            }
          },
          "annotations": {
            "horizontal": [
              {
                "label": "Threshold",
                "value": 50,
                "color": "#ff0000"
              }
            ]
          }
        }
      }
    ]
  })
}
