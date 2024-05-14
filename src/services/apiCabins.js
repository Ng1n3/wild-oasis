import supabase, { supabaseUrl } from "./supaBase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log("supabaseUrl: ", supabaseUrl);
  console.log("newcabin: ", newCabin);
  // const { data, error } = await supabase
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // console.log("Image name: ",imageName)

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // console.log("imagePath", imagePath)

  //1. create/edit cabin
  let query = supabase.from("cabin");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created/edited");
  }

  // 2. upload image
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    //3. Delete the cabin If there was an error uploading the image
    if (storageError) {
      console.error("Error uploading Image", storageError);
      await supabase.from("cabin").delete().eq("id", data.id);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created"
      );
  }

  console.log("image data", data);
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
