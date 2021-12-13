const routes = (handler) => [
  {
    // Simpan Post
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    // tampilkan semua note
    method: 'GET',
    path: '/notes',
    handler: handler.getAllNotesHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    // tampilkan note sesuai Id
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    // edit note sesuai Id
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    // hapus note sesuai Id
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
];

module.exports = routes;
