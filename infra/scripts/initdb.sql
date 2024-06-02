CREATE TABLE users(
    id SERIAL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    balance DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    password VARCHAR(1000) NOT NULL
);

CREATE TABLE transactions( 
    id SERIAL,
    id_user INT, 
    type_transaction VARCHAR(255) NOT NULL,
    moment_transaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    value_transaction DECIMAL(12,2) DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES users(id)
);