import {
  Container,
  Title,
  Categories,
  SortPopup,
  TopBar,
} from "@/components/shared";
import { Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductsGroupList } from "@/components/shared/ProductsGroupList";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 2,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 3,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 4,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                ]}
                title="Пиццы"
              />
              <ProductsGroupList
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 2,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 6,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 7,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 8,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 9,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                ]}
                title="Комбо"
              />
              <ProductsGroupList
                categoryId={3}
                items={[
                  {
                    id: 6,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 7,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 8,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                  {
                    id: 9,
                    name: "Pizza",
                    items: [{ price: 234 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                  },
                ]}
                title="Закуски"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
