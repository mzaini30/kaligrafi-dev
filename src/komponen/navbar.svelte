<script>
  import {
    Navbar,
    MenuItem,
    MenuDropdown,
    MenuDropdownItem,
    Button,
    Menu,
    NavRight,
    Actions,
    ActionsGroup,
    ActionsLabel,
    ActionsButton,
  } from "framework7-svelte";
  import { push } from "svelte-spa-router";
  export let title = "Kaligrafi";
</script>

<Navbar {title}>
  <NavRight>
    <Button text="menu" actionsOpen="#actions-one-group" />
  </NavRight>
</Navbar>

<Actions id="actions-one-group">
  <ActionsGroup>
    <ActionsButton onClick={() => push("/")}>Home</ActionsButton>
    <ActionsButton onClick={() => push("/donasi")}>Donation</ActionsButton>
    <ActionsButton
      onClick={() =>
        (location.href =
          "https://play.google.com/store/apps/details?id=com.trihandayani.kaligrafi")}
      >Give 5 Stars</ActionsButton
    >
  </ActionsGroup>
</Actions>
