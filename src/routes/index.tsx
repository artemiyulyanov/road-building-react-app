import { createFileRoute } from '@tanstack/react-router'
import { HomeIntroductoryBanner } from '@/components/HomeIntroductoryBanner';
import { Menu } from '@/components/Menu';

export const Home = () => {
    return (
        <div>
            <Menu />
            <HomeIntroductoryBanner />
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: Home,
})