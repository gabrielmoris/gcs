// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken: any = process.env.GRAPHCMS_TOKEN
type Data = {
  name: string
}

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log({graphcmsToken})
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  })

  const query = gql`
    mutation CreateComent(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComent(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
    })

    return res.status(200).send(result)
  } catch (e:any) {
    console.log('this is the error', e)
    return res.status(500).send(e)

  }
}
