import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  // Define a custom function for navigation
  const handlePress = async (event: any) => {
    if (Platform.OS !== "web") {
      // Prevent the default behavior of linking to the default browser on native.
      event.preventDefault();
      // Open the link in an in-app browser.
      await openBrowserAsync(href);
    }
  };

  return (
    <Link
      {...rest}
      href={href as any} // Type assertion to bypass type checking for href
      onPress={handlePress}
    />
  );
}
