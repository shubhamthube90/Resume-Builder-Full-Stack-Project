package in.shubham.resumebuilderapi.config;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

    @Value("${keyid}")
    private String keyId;

    @Value("${key_secret}")
    private String keySecret;

    @Bean
    public RazorpayClient razorpayClient() throws RazorpayException {
        System.out.println("🔑 Razorpay Key Loaded: " + keyId);
        System.out.println("🔐 Razorpay Secret Loaded: " + (keySecret != null));
        return new RazorpayClient(keyId, keySecret);
    }
}
