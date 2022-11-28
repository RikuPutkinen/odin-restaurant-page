export default function loadHome(container) {
  const heading = document.createElement('h1');
  heading.textContent = "Satellite Café";

  const description = document.createElement('p');
  description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a aliquet diam, non ultricies diam. Pellentesque sapien mi, viverra vel quam eu, tincidunt facilisis lectus. Sed maximus, risus faucibus scelerisque accumsan, diam turpis varius nulla, nec faucibus justo augue id est. Nunc consectetur egestas quam, nec iaculis felis fringilla in. Aliquam at facilisis odio. Phasellus dignissim libero a gravida molestie. Proin vulputate ligula in magna vulputate bibendum. Sed scelerisque ullamcorper felis, et efficitur tellus cursus sit amet. Vestibulum dictum purus ac iaculis laoreet. Cras venenatis iaculis sollicitudin. "

  container.appendChild(heading);
  container.appendChild(description);
}