import supabase from "./supaBase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  // const { data, error } = await supabase
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = 
  //1. create cabin
  const { error } = await supabase.from("cabin").insert([newCabin]).select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. upload image
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
