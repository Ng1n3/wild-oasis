import supabase from "./supaBase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase
    .from("cabin")
    .delete()
    .eq("id", id);

    if(error) {
      console.error(error);
      throw new Error('Cabin could not be deleted');
    }
}
