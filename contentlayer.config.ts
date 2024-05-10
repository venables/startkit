import { defineDocumentType, makeSource } from "contentlayer2/source-files"

export const LegalPage = defineDocumentType(() => ({
  name: "LegalPage",
  filePathPattern: "legal/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) =>
        `/legal/${page._raw.flattenedPath.replace("legal/", "")}`
    }
  }
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [LegalPage]
})
