export const typeDefs = `
  type User {
    email: String!
    name: String
  }
  type Speciality {
    name: String!
  }
  type Contractor {
    full_name: String!
    day_rate: Int!
    available: Boolean!
    specialities: [Speciality!]
  }
  type Query {
    allUsers: [User!]!
    contractors(_sort: String, _order: String, q: String): [Contractor!]!
  }
`
