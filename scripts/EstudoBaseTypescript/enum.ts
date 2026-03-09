enum Permission {
    ADMIN = 1,
    USER = 3,
    READONLY,
}

console.log(Permission.ADMIN);
console.log(Permission["USER"]);
console.log(Permission[1]);
console.log(Permission["READONLY"]);
console.log(Permission[4]);