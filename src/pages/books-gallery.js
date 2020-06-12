/** @jsx jsx */

import { jsx, Styled, Box, Container, AspectImage, Avatar, Text, Grid, Link, NavLink, Button, Flex} from 'theme-ui'

import React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'

import source from './books-sources.json'
 

export default props => {
 

  const {collections = []} = source;
  const isShowMore = false;
  const readBooks = collections.filter(c => new Date(c.updated).getFullYear() === 2020 && c.status === 'read');


  drawChart();
  setTimeout(() => {
    drawCategoryChart()
  }, 1000)
  
  return (
  <Styled.root>
    <Layout {...props}>
    <Container>
      <Box py={40}>
        <Styled.h1>2020 Read</Styled.h1>
        <Grid columns={10}>
          {
            readBooks.map(c => {
              const startNum = Math.floor(c.book.rating.average / c.book.rating.max * 10 / 2)
              return (
              <NavLink href={c.book.alt} target="_blank">
                <Styled.img sx={{height: '9em', width: '7em', borderRadius: 8}}  src={'https://images.weserv.nl/?url=' + c.book.images.small.replace('https://', '')} />
                <Text sx={{fontSize: '.6em'}}>{c.book.title}</Text>
                <Flex>
                  <Text sx={{fontSize: '.5em', color: '#FFCC66'}}>{'★★★★★'.slice(0, startNum)}</Text>
                  <Text sx={{fontSize: '.5em', color: '#fff', opacity: .3, flex: 1}}>{'★★★★★'.slice(0, 5 - startNum)}</Text>
                </Flex>
              </NavLink>
            )})
          }
        </Grid>
      </Box>
      <div id="main" style={{width: 600, height: 400}} ></div>
      <div id="chart" style={{width: 800, height: 600}} ></div>
    </Container>
    </Layout>
  
      
  </Styled.root>
  )
}


const drawChart = () => {

  setTimeout(() => {

    var myChart = window.echarts.init(document.getElementById('main'));

    // 筛选出 2020已读书目
    const {collections = []} = source;
    const readBooks = collections.filter(c => c.status === 'read');

    let res = {}
    readBooks.map(book => {
      let updateDate = new Date(book.updated);
      if (updateDate.getFullYear() === 2020) {
        const month = updateDate.getMonth() + 1;

        if (res[month]) {
          res[month]++
        } else {
          res[month] = 1
        } 
      }
    })

    // 得到月份和对应的书目

    
    // 指定图表的配置项和数据
    var option = {
      title: {
          text: "2020 Read",
          left: "center",
          bottom: "5%",
          textStyle: {
              color: "#fff",
              fontSize: 16
          }
      },
      grid: {
          top: '20%',
          left: '10%',
          right: '10%',
          bottom: '15%',
          containLabel: true,
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: Object.keys(res),
          axisLabel: {
              margin: 30,
              color: '#ffffff63'
          },
          axisLine: {
              show: false
          },
          axisTick: {
              show: true,
              length: 25,
              lineStyle: {
                  color: "#ffffff1f"
              }
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#ffffff1f'
              }
          }
      },
      yAxis: [{
          type: 'value',
          position: 'right',
          axisLabel: {
              margin: 20,
              color: '#ffffff63'
          },
  
          axisTick: {
              show: true,
              length: 15,
              lineStyle: {
                  color: "#ffffff1f",
              }
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#ffffff1f'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  width: 2
              }
          }
      }],
      series: [{
          name: '注册总量',
          type: 'line',
          smooth: true, //是否平滑曲线显示
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
              normal: {
                  color: "#fff", // 线条颜色
              },
          },
          label: {
              show: true,
              position: 'top',
              textStyle: {
                  color: '#fff',
              }
          },
          itemStyle: {
              color: "red",
              borderColor: "#fff",
              borderWidth: 3
          },
          tooltip: {
              show: false
          },
          areaStyle: {
              normal: {
                  color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#eb64fb'
                      },
                      {
                          offset: 1,
                          color: '#3fbbff0d'
                      }
                  ], false),
              }
          },
          data: Object.values(res),
      }]
  };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, 1000)
  
}

const drawCategoryChart = () => {

  var myChart = window.echarts.init(document.getElementById('chart'));

  var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
  var bgColor = '#2E2733';
  
  var itemStyle = {
      star5: {
          color: colors[0]
      },
      star4: {
          color: colors[1]
      },
      star3: {
          color: colors[2]
      },
      star2: {
          color: colors[3]
      }
  };

  // 先分类 后填色
  // 根据书目的tags进行分类 优先归类某些tag
  let dataMap = {};
  let {collections} = source;

  collections = collections.filter(c => new Date(c.updated).getFullYear() === 2020 && c.status === 'read');

  const priority = [
    '推理', '科幻', '文学', 
    '互联网', '软件开发', 
    '心理', '心理学', '社会学', '社会',
    '情感', 
    '小说',
    '哲学', '经济', '艺术'
  ]

  collections.forEach(c => {

    // 找到优先级的标签
    let priorityTag = ''
    // 先给tag排序
    const tags = c.book.tags.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })

    priority.forEach(p => {
      tags.forEach(tag => {
        if (tag.title === p && !priorityTag) {
          priorityTag = p
        } 
      })
    })

    const tagName = priorityTag || '其它'
    const name = c.book.title
    const status = c.status

    const star =  Math.floor(c.book.rating.average / c.book.rating.max * 10 / 2)
    if (dataMap[tagName]) {
      dataMap[tagName].push({star, name, status})
    } else {
      dataMap[tagName] = [{star, name, status}]
    }
  })

  // 构建对应的数据结构
  let children = []
  for (var tagName in dataMap) {
    const list = dataMap[tagName]

    let res = [];
    [1,2,3,4,5].forEach(i => {
      const books = list.filter(item => item.star === i)
      if (books && books.length) {
        res.push({
          name: i + '☆',
          children: books
        })
      }
    })

    children.push({
      name: tagName,
      children: res
    })
  }

  var data = [{
    name: '阅读',
    itemStyle: {
        color: colors[1]
    },
    children
  }]
  
  for (var j = 0; j < data.length; ++j) {
      var level1 = data[j].children;
      for (var i = 0; i < level1.length; ++i) {
          var block = level1[i].children;
          var bookScore = [];
          var bookScoreId;
          for (var star = 0; star < block.length; ++star) {
              var style = (function (name) {
                  switch (name) {
                      case '5☆':
                          bookScoreId = 0;
                          return itemStyle.star5;
                      case '4☆':
                          bookScoreId = 1;
                          return itemStyle.star4;
                      case '3☆':
                          bookScoreId = 2;
                          return itemStyle.star3;
                      case '2☆':
                          bookScoreId = 3;
                          return itemStyle.star2;
                  }
              })(block[star].name);
  
              block[star].label = {
                  color: style.color,
                  downplay: {
                      opacity: 0.5
                  }
              };
  
              if (block[star].children) {
                  style = {
                      opacity: 1,
                      color: style.color
                  };
                  block[star].children.forEach(function (book) {
                      book.value = 1;
                      book.itemStyle = style;
  
                      book.label = {
                          color: style.color
                      };
  
                      var value = 1;
                      if (bookScoreId === 0 || bookScoreId === 3) {
                          value = 5;
                      }
  
                      if (bookScore[bookScoreId]) {
                          bookScore[bookScoreId].value += value;
                      }
                      else {
                          bookScore[bookScoreId] = {
                              color: colors[bookScoreId],
                              value: value
                          };
                      }
                  });
              }
          }
  
          level1[i].itemStyle = {
              color: data[j].itemStyle.color
          };
      }
  }
  
  const option = {
      backgroundColor: bgColor,
      color: colors,
      series: [{
          type: 'sunburst',
          center: ['50%', '48%'],
          data: data,
          sort: function (a, b) {
              if (a.depth === 1) {
                  return b.getValue() - a.getValue();
              }
              else {
                  return a.dataIndex - b.dataIndex;
              }
          },
          label: {
              rotate: 'radial',
              color: bgColor
          },
          itemStyle: {
              borderColor: bgColor,
              borderWidth: 2
          },
          levels: [{}, {
              r0: 0,
              r: 40,
              label: {
                  rotate: 0
              }
          }, {
              r0: 40,
              r: 105
          }, {
              r0: 115,
              r: 140,
              itemStyle: {
                  shadowBlur: 2,
                  shadowColor: colors[2],
                  color: 'transparent'
              },
              label: {
                  rotate: 'tangential',
                  fontSize: 10,
                  color: colors[0]
              }
          }, {
              r0: 140,
              r: 145,
              itemStyle: {
                  shadowBlur: 80,
                  shadowColor: colors[0]
              },
              label: {
                  position: 'outside',
                  textShadowBlur: 5,
                  textShadowColor: '#333',
              },
              downplay: {
                  label: {
                      opacity: 0.5
                  }
              }
          }]
      }]
  };

  myChart.setOption(option);
  
}
