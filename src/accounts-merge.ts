export interface Account {
  /**
   * Instructions indicate this should be a string, but all models use numbers.
   */
  application: string | number
  emails: string[]
  name: string
}

export interface Person {
  /**
   * Instructions indicate this should be a string, but all models use numbers.
   */
  applications: Array<string | number>
  emails: string[]
  name: string
}

export default function accountsMerge(accounts: Account[]): Person[] {
  const people: Person[] = []

  accounts.forEach(account => {
    const person = people.find(person =>
      person.emails.some(email => account.emails.includes(email))
    )
    if (person) {
      person.applications = [...person.applications, account.application]
      person.emails = [...person.emails, ...account.emails]
    } else {
      people.push({
        applications: [account.application],
        emails: account.emails,
        name: account.name,
      })
    }
  })

  return people
}
