import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CreatePostForm() {
    return (
        <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Post</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          type="text"
                          className="w-full"
                          defaultValue="Gamer Gear Pro Controller"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="title">Description</Label>
                        <Input
                          id="description"
                          type="text"
                          className="w-full"
                          defaultValue="Main points of this article"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                          id="content"
                          defaultValue="## input your content here"
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
    )
}