import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="contact/[contactId]"
        options={{ title: "Contact Details" }}
      />
      <Stack.Screen name="tasks/index" options={{ title: "All Tasks" }} />
    </Stack>
  );
}
