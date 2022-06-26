"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function accountsMerge(accounts) {
    const people = [];
    accounts.forEach(account => {
        const person = people.find(person => person.emails.some(email => account.emails.includes(email)));
        if (person) {
            person.applications = [...person.applications, account.application];
            const uniqueEmails = new Set([...person.emails, ...account.emails]);
            person.emails = [...uniqueEmails];
        }
        else {
            people.push({
                applications: [account.application],
                emails: account.emails,
                name: account.name,
            });
        }
    });
    return people;
}
exports.default = accountsMerge;
