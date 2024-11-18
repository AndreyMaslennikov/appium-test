package com.example;

import org.openqa.selenium.WebElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.android.options.UiAutomator2Options;
import junit.runner.Version;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

// AppCenter imports
// import com.microsoft.appcenter.appium.Factory;
// import com.microsoft.appcenter.appium.EnhancedAndroidDriver;
// import org.junit.rules.TestWatcher;
// import org.junit.Rule;

import static org.junit.Assert.assertEquals;

/**
 * Unit test for simple App.
 */
public class AppTest
{
    private static AndroidDriver driver;
    // private static EnhancedAndroidDriver<WebElement> driver;

    // @Rule
    // public TestWatcher watcher = Factory.createWatcher();

    @Before
    public void setUp() throws MalformedURLException {
        // DesiredCapabilities caps = new DesiredCapabilities();
        // caps.setCapability("appium:automationName", "UiAutomator2");
        // caps.setCapability("platformName", "Android");
        // caps.setCapability("platformVersion", "15");
        // caps.setCapability("deviceName", "Pixel");
        // caps.setCapability("appPackage", "com.example.myapplication2");
        // caps.setCapability("appActivity", "com.android.myapplication2.MainActivity");

        UiAutomator2Options options = new UiAutomator2Options();
        options.setPlatformName("Android");
        options.setDeviceName("Pixel");
        options.setApp("/Users/andrey/AndroidStudioProjects/MyApplication2/app/build/outputs/apk/debug/app-debug.apk");

        // UiAutomator2Options options = new UiAutomator2Options()
        //     .setPlatformName("Android")
        //     .setDeviceName("Pixel")
        //     .setAutomationName("UiAutomator2")
        //     .setApp("/Users/andrey/AndroidStudioProjects/MyApplication2/app/build/outputs/apk/debug/app-debug.apk");

        // driver = Factory.createAndroidDriver(url, capabilities);
        driver = new AndroidDriver(new URL("http://127.0.0.1:4723"), options);
    }

    @Test
    public void testAddition() {
        assert(true);
        System.out.println("JUnit version is: " + Version.id());
    }

    @After
    public void tearDown() {
        if (driver != null) {
            
            driver.quit();
        }
    }
}
