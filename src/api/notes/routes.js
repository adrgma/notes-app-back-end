const routes = (handler) => [
  {
    // Simpan Post
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler,
  },
  {
    // tampilkan semua note
    method: 'GET',
    path: '/notes',
    handler: handler.getAllNotesHandler,
  },
  {
    // tampilkan note sesuai Id
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    // edit note sesuai Id
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
  },
  {
    // hapus note sesuai Id
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
