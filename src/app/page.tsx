import {
  Container,
  Title,
  Categories,
  SortPopup,
  TopBar,
} from "@/components/shared";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
