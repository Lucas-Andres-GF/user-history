import type { Load, Page } from "@sveltejs/kit";
import type { CompactSystem } from '$lib/types';

const systems: CompactSystem[] = [
  {
    "id": "prueba_1",
    "title": "Pedidos Ya",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "histories": []
  }, {
    "id": "prueba_2",
    "title": "Pedidos Ya",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "histories": [
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      }
    ]
  },
  {
    "id": "prueba_3",
    "title": "Negocio zapatillas",
    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet totam enim temporibus, eaque voluptatum assumenda ad! Aperiam vero sit ipsum, nulla doloremque, porro eligendi saepe adipisci quia culpa minus sapient",
    "histories": [
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
      {
        "slug": "test_1",
        "id": "Test 1",
        "title": "Test context for the test",
        "color": `hsl(${Math.round(Math.random() * 360)} 85% 78%)`,
      },
    ]
  }, {
    "id": "prueba_4",
    "title": "Pedidos Ya",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "histories": []
  }
]

export async function load({ params }: Page) {
  // systems.forEach(system => console.log(system.histories))
  return { systems };
}
