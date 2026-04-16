package com.v1.backend.util;

import lombok.extern.slf4j.Slf4j;

import java.util.function.Supplier;

@Slf4j
public class RetryUtil {

    public static <T> T executeWithRetry(Supplier<T> operation, int maxRetries, long initialDelayMs) {
        int attempt = 0;
        long delay = initialDelayMs;

        while (true) {
            try {
                return operation.get();
            } catch (Exception e) {
                attempt++;
                if (attempt >= maxRetries) {
                    log.error("Max retries reached after {} attempts", maxRetries);
                    throw new RuntimeException("Operation failed after " + maxRetries + " retries", e);
                }
                log.warn("Attempt {} failed, retrying in {}ms", attempt, delay);
                try {
                    Thread.sleep(delay);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Interrupted during retry", ie);
                }
                delay *= 2;
            }
        }
    }

    public static void executeWithRetry(Runnable operation, int maxRetries, long initialDelayMs) {
        executeWithRetry(() -> {
            operation.run();
            return null;
        }, maxRetries, initialDelayMs);
    }
}