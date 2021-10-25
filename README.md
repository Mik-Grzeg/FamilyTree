
# Table of Contents

1.  [Family Tree IO Project](#org193cfad)
    1.  [Technologies](#org3c00da8)
        1.  [Frontend](#orgf21d4f2)
        2.  [Backend in Rust](#org3adbffe)
        3.  [Database](#org0e1314a)
        4.  [Infrastructure](#org2a18421)
        5.  [Testing](#org123a108)
    2.  [TODO](#orgba6d6dd)



<a id="org193cfad"></a>

# Family Tree IO Project

A feature-rich web application that <del>is</del> will be designed for creating family trees. <del>User-friendly ui design with many functionalities</del>.


<a id="org3c00da8"></a>

## Technologies


<a id="orgf21d4f2"></a>

### Frontend

-   React.js
-   Typescript
-   Styled Components
-   libraries
    -   [React-family-tree](<https://www.npmjs.com/package/react-family-tree>)
    -   react-toastify
    -   axios


<a id="org3adbffe"></a>

### Backend in Rust

-   Actix-web


<a id="org0e1314a"></a>

### Database

-   Postgresql


<a id="org2a18421"></a>

### Infrastructure

-   Docker
-   k8s


<a id="org123a108"></a>

### Testing

-   Units
    -   Rust
    -   React testing library
-   Integration
    -   Pytest
-   e2e
    -   cypress


<a id="orgba6d6dd"></a>

## TODO

-   visualization
-   dragging elements
-   multimedia attachments (mostly images)
-   recognizing different relations between indiviuals
-   time frame of the relationship
-   biographical informations
-   a posibility to export the tree to HTML, PDF
-   read/write the tree from/to json
-   multitenant architecture
-   persistent trees, with the help of a database
-   user authentication service

