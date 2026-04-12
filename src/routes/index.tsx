import { createFileRoute } from '@tanstack/react-router'

export const Home = () => {
  return (
    <div>Home page</div>
  );
}

export const Route = createFileRoute('/')({
  component: Home,
})