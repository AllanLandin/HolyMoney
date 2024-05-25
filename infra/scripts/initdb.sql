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
    slug VARCHAR(255) NOT NULL UNIQUE,
    balance DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_user
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE transactions( 
    id SERIAL,
    id_account INT,
    id_user INT, 
    moment_transaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    value_transaction DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_account FOREIGN KEY (id_account) REFERENCES accounts(id),
    CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES users(id)
);