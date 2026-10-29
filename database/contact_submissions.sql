CREATE DATABASE IF NOT EXISTS checkmyvan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE checkmyvan;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(40) NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  email_sent BOOLEAN NOT NULL DEFAULT FALSE,
  email_sent_at TIMESTAMP NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_contact_submissions_created_at (created_at),
  INDEX idx_contact_submissions_email_sent (email_sent)
) ENGINE=InnoDB
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
