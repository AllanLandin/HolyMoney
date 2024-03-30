CREATE TABLE users(
    id SERIAL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    password VARCHAR(1000) NOT NULL
);

CREATE TABLE accounts(
    id SERIAL,
    id_user INT,
    slug VARCHAR(255) NOT NULL,
    balance DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_user
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE transactions( 
    id SERIAL,
    id_account INT,
    moment_transaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    value DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_account
    FOREIGN KEY (id_account) REFERENCES accounts(id)
);