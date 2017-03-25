# Timeoff Management Challenge

## Getting started

### Familiarize yourself with the codebase

1. First step of approaching a new codebase is to read the [README](README.md).
1. Next, get the code up and running. Checkout the [README](README.md) and look for instructions to get a local development copy of the repo up and running and play around with it.
1. Next, read the browse in the `t` directory. Reading test descriptions (and file names) is a great way to learn what the app can do.
1. Next, run all the tests locally, to make sure they are passing. (for this repo, there will be several failing tests) You'll need phantomjs installed: `npm install phantomjs` then run `npm test`
1. Next, checkout the [database design](docs/db_design.txt). Load it up in [sql designer](http://sql.apps.learnersguild.org/) and familiarize yourself with the schema.
1. Finally, look around the other folders and get a sense of how the code is organized, and what the technology stack is: database? front end? test suite? asset management? css framework?


## Epics

## Epic 1: New role: Approvers

This epics adds a new role: approver. Approvers can approve and reject requests, but don't have all of the admin access that an admin has.

-X As an Admin when I add a new user, I can choose to make them an approver
-X As an Admin if I try to make someone an approver AND an admin I get an error: "User can only be approver or admin, not both"
-X As an approver I can see a menu item in the top navbar next to calendar called "Requests" which links to "/requests"
-X As an admin I can see the requests link as well
-X As an employee I cannot see the requests link
- As an approver or admin, I can see a notification icon next to the request link that shows the number of pending requests
- As an approver, I can approve and reject requests
-X As an approver, I do not have access to other admin functions (general, department, LDAP configuration, emails audit)

## Epic 2: New role: Backend User

This epic adds a new role: backend user. Backend users can access general admin functions, but can't approve/reject requests.

- As an Admin when I add a new user, I can choose to make them 'backend user'
- As an Admin if I try to make someone a 'backend user' AND an admin I get an error: "User can only be approver or admin, not both"
- As a Backend user, I can't see the 'Requests' menu item
- As a Backend user, when I browse '/request' I see only my personal requests, not the admin/approver view
- As a Backend user, I have access to other admin functions (general, department, LDAP configuration, emails audit)

## Epic 3: International

The software assumes the users are US-Based: The list of holidays have mostly US holidays. The international users are pissed about this, and they want to see their countries' holidays represented there by default. For this epic, we create a new SuperAdmin user, who has the ability to create default holiday lists and country support.

- As a SuperAdmin I can maintain a list of countries that the app supports. I can add, edit, delete countries from the list
- As a SuperAdmin I see there is a "Other" in my country list. I can't add, edit, or delete that "Other" from the list
- As a SuperAdmin I can add more users as SuperAdmins
- As an Admin, I cannot add more users as SuperAdmins
- As a SuperAdmin I can maintain a list of Bank Holidays **for each** country in my country list. I can add, edit, delete countries from the list.
- As a new Admin, when I sign up, I can choose any country defined by SuperAdmin or "Other", and my Bank Holiday list is populated by the corresponding list defined by the SuperAdmin

## Epic 4: Date Formats

Different countries have a different date format. This epic allows the SuperAdmin to set a different default date format for different countries.

- As a SuperAdmin I can select a different default date format for different countries in the countries list
- As a new Admin, when I sign up, the selected date format is that of the country I signed up with
