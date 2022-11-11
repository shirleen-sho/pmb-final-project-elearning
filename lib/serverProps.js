export async function getServerSideProps(ctx) {
  // masih coba-coba

  // Fetch data
  const data = "Starling";
  const api = await fetch(
    "https://api.starling.kotasatelit.com/api/school-identity/1"
  );
  const res = await api.json();

  // Pass data to the page via props
  return { props: { data, res } };
}
