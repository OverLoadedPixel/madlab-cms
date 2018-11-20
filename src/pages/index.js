import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, Icon, Avatar, Row, Col } from "antd";

const { Meta } = Card;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>

          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <Row gutter={16}>
            {posts.map(({ node: post }) => (

                <Col span={8}>
                <Card
                  key={post.id}
                  style={{ width: 300, marginTop: '1rem'}}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >

                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<><Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small></>}
                    description={post.excerpt}
                  />
                </Card>
                </Col>
              ))}
            </Row>
          </div>

      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
