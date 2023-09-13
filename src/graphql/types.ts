export const typeDefs = `
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
    contractors(_sort: String, _order: String, q: String): [Contractor!]!
  }
`
