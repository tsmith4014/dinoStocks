resource "aws_cloudwatch_dashboard" "eks_ec2_nodes_monitoring" {
  dashboard_name = "dinostocks-ec2-nodes-monitoring"

  dashboard_body = <<EOF
{
  "widgets": [
    {
      "type": "metric",
      "x": 0,
      "y": 0,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "CPUUtilization",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "CPU Utilization"
      }
    },
    {
      "type": "metric",
      "x": 6,
      "y": 0,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "StatusCheckFailed_Instance",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Status Check: Failed Instance"
      }
    },
    {
      "type": "metric",
      "x": 12,
      "y": 0,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "NetworkIn",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Network: In"
      }
    },
    {
      "type": "metric",
      "x": 0,
      "y": 6,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "NetworkPacketsIn",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Network Packets: In"
      }
    },
    {
      "type": "metric",
      "x": 6,
      "y": 6,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "NetworkOut",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Network Out"
      }
    },
    {
      "type": "metric",
      "x": 12,
      "y": 6,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "NetworkPacketsOut",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Network Packets: Out"
      }
    },
    {
      "type": "metric",
      "x": 0,
      "y": 12,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "DiskReadOps",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Disk Read Ops"
      }
    },
    {
      "type": "metric",
      "x": 6,
      "y": 12,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "DiskReadBytes",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Disk Read: Bytes"
      }
    },
    {
      "type": "metric",
      "x": 12,
      "y": 12,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "DiskWriteOps",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Disk Write Ops"
      }
    },
    {
      "type": "metric",
      "x": 0,
      "y": 18,
      "width": 6,
      "height": 6,
      "properties": {
        "metrics": [
          [
            "AWS/EC2",
            "DiskWriteBytes",
            "InstanceId",
            "i-092d7938d6ae1e0c6"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Disk Write: Bytes"
      }
    },
    {
        "type": "graph",
  "x": 6,
  "y": 18,
  "width": 12,
  "height": 6,
  "properties": {
    "title": "CPU Utilization vs CPU Credit Balance",
    "metrics": [
      [
        "AWS/EC2",
        "CPUUtilization",
        "InstanceId",
        "i-092d7938d6ae1e0c6"
      ],
      [
        "AWS/EC2",
        "CPUCreditBalance",
        "InstanceId",
        "i-092d7938d6ae1e0c6"
      ]
    ],
    "period": 300,
    "stat": "Average",
    "region": "us-east-1",
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
}
EOF
}