import { type LegalPage, allLegalPages } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

function getSlug(page: LegalPage) {
  return page._raw.flattenedPath.replace("legal/", "")
}

export const generateStaticParams = () =>
  allLegalPages.map((page) => ({
    slug: getSlug(page)
  }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const page = allLegalPages.find((p) => getSlug(p) === params.slug)
  if (!page) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: page.title }
}

type Props = { params: { slug: string } }

export default function Page({ params }: Props) {
  console.log(allLegalPages)
  const page = allLegalPages.find((p) => getSlug(p) === params.slug)
  if (!page) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(page.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="font-bold text-3xl">{page.title}</h1>
        <time dateTime={page.date} className="mb-1 text-gray-600 text-xs">
          Last updated: {format(parseISO(page.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="prose [&>*:last-child]:mb-0 [&>*]:mb-3">
        {/* dangerouslySetInnerHTML={{ __html: post.body.html }} */}
        <MDXContent />
      </div>
    </article>
  )
}
