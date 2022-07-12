import React from 'react';

export default function UsernameForm() {
  return (
    <div>
    <form>
      <label for="username">Username</label>
      <br />
      <input type="text" id="username" name="username" />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
