import { useState } from 'react';

export default function useAuth() {
  const [sideBar, setSideBar] = useState(false);

  return { sideBar, setSideBar };
}
